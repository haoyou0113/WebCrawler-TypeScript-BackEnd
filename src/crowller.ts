import superagent from 'superagent'

class Crawler {
    private secret = 'x3b174jsx'
    private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`
    private rwaHtml = '';
    async getRawHtml() {
        const result = await superagent.get(this.url)
        console.log(result.text)
    }
    constructor() {
        this.getRawHtml()
    }

}


const crawler = new Crawler()