/**设置为严格模式*/
'use strict';

const https = require('https');
const querystring = require('querystring');
const util = require('util');


class V2exApi {

    /**
    * V2exApi constructor.
    */
    constructor() {
        this.apiDomain = "https://www.v2ex.com/api/";
    }

    /**
    * @param string api
    * @param array  params
    * @param bool   $format
    *
    * @return mixed|string
    *
    * @throws HttpException
    */
    request(api, params = {}, $format = true) {
        //格式化请求地址
        let apiUrl = util.format(api, this.apiDomain, Object.keys(params).length > 0 ? querystring.stringify(params) : '');

        https.get(apiUrl, res => {
            const buffer = [];
            res.on('data', data => {
                buffer.push(data);
            });
            res.on('end', err => {
                let data = Buffer.concat(buffer).toString('utf-8');
                let result = $format ? JSON.parse(data) : data;
                console.log(result)
            });

        }).on('error', err => {
            console.log(err);
        });
    }

    /**
     * 获取最热主题.
     *
     * @param bool $format
     *
     * @return mixed|string
     *
     * @throws HttpException
     */
    getHotTopics($format = true) {
        return this.request('%stopics/hot.json', {}, $format);
    }

    /**
     * 获取最新主题.
     *
     * @param bool $format
     *
     * @return mixed|string
     *
     * @throws HttpException
     */
    getLatestTopics($format = true) {
        return this.request('%stopics/latest.json', {}, $format);
    }

    /**
     * 获取节点信息.
     *
     * @param string $name
     * @param bool   $format
     *
     * @return mixed|string
     *
     * @throws HttpException
     */
    getNode(name, $format = true) {
        return this.request('%snodes/show.json?%s', { 'name': name }, $format);
    }

    /**
     * 根据用户名获取用户信息.
     *
     * @param string $username
     * @param bool   $format
     *
     * @return mixed|string
     */
    getMemberByUsername(username, $format = true) {
        return this.request('%smembers/show.json?%s', { 'username': username }, $format);
    }

    /**
     * 根据用户 ID 获取用户信息.
     *
     * @param int  $id
     * @param bool $format
     *
     * @return mixed|string
     */
    getMemberByID(id, $format = true) {
        return this.request('%smembers/show.json?%s', { 'id': id }, $format);
    }
}
