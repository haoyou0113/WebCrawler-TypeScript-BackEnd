"use strict";
// import { getResponseData } from './utils/util';
// import { Router, Request, Response, NextFunction } from 'express'
// import Crawler from './utils/crowller'
// import Analyzer from './utils/analyzer'
Object.defineProperty(exports, "__esModule", { value: true });
// import fs from 'fs';
// import path from 'path'
// const checkLogin = (req: Request, res: Response, next: NextFunction) => {
//     const isLogin = req.session ? req.session.login : false
//     if (isLogin) {
//         next()
//     } else {
//         res.json(getResponseData(null, "Please Login"))
//     }
// }
// interface BodyRequest extends Request {
//     body: {
//         [key: string]: string | undefined
//     }
// }
// const router = Router()
// router.get('/', () => { })
// router.post('/login', (req: BodyRequest, res: Response) => {
//     const { password } = req.body;
//     const isLogin = req.session ? req.session.login : false
//     if (isLogin) {
//         res.json(getResponseData(false, 'already login'))
//     } else {
//         if (password === '123' && req.session) {
//             req.session.login = true;
//             res.json(getResponseData(true))
//         }
//         else {
//             res.json(getResponseData(false, 'login failed'))
//         }
//     }
// });
// router.get('/logout', (req: Request, res: Response) => {
//     if (req.session) {
//         req.session.login = false
//     }
//     res.json(getResponseData(true))
// })
// router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {
//     const secret = 'x3b174jsx'
//     const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}` // set
//     const analyzer = Analyzer.getInstance()
//     new Crawler(url, analyzer)
//     res.json(getResponseData(true))
// })
// router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
//     try {
//         const position = path.resolve(__dirname, '../data/result.json')
//         const result = fs.readFileSync(position, 'utf-8')
//         res.json(getResponseData((JSON.parse(result))))
//     } catch {
//         res.json(getResponseData(false, 'no result'))
//     }
// })
// export default router
var express_1 = require("express");
exports.default = express_1.Router();
