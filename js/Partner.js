class Partner {
    constructor(url, cookie) {
        url = url.slice(1, url.length).split("&");
        const life_time = 2592000000;

        const {
            _ga
        } = Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')));

        const {
            partner_id,
            utm_campaign,
            utm_content,
            utm_medium,
            utm_source,
            utm_term
        } = Object.fromEntries(
            url.map(el => el.split("=")));

        const remember_browser = (exist_id) => {
            if (exist_id) {
                localStorage.setItem("partner_id", exist_id);
                localStorage.setItem("time_stamp", Date.now());
            } else if (Date.now() - localStorage.getItem("time_stamp") >= life_time) {
                localStorage.removeItem("partner_id");
                localStorage.removeItem("time_stamp");
            }
        }

        remember_browser(partner_id);



        this.get_cookie = () => ({
            _ga
        });

        this.get_utm = () => ({
            utm_campaign,
            utm_content,
            utm_medium,
            utm_source,
            utm_term
        });

        this.get_partner_id = () => ({
            partner_id
        })

        this.get_all_data = () => {
            const data = {
                utm_campaign,
                utm_content,
                utm_medium,
                utm_source,
                utm_term,
                partner_id: localStorage.getItem("partner_id"),
                _ga
            };
            for (const key in data) {
                !data[key] && delete data[key]
            }
            return data
        }
    }
}