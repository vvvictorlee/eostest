/*  Wallet API */
const request = require('superagent');

module.exports = (HOST, WALLET_PORT) => {
    const api = {};
    const genURL = (PATH) => `${HOST}:${WALLET_PORT}${PATH}`;

    /**
     * create
     * @param {string} name wallet name.
     */
    api.create = async (name) => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/create`;
        request
            .post(genURL(PATH))
            .set('accept', 'json')
            .send(name)
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * open
     * @param {string} name wallet name.
     */
    api.open = async (name) => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/open`;
        request
            .post(genURL(PATH))
            .set('accept', 'json')
            .send(name)
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * lock
     * @param {string} name wallet name.
     */
    api.lock = async (name) => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/lock`;
        request
            .post(genURL(PATH))
            .set('accept', 'json')
            .send(name)
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * lock_all
     * @param {string} name wallet name.
     */
    api.lock_all = async (name) => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/lock_all`;
        request
            .post(genURL(PATH))
            .set('accept', 'json')
            .send(name)
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * wallet_unlock
     * @param {string} name wallet name.
     * @param {string} password wallet password.
     */
    api.unlock = async (name, password) => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/unlock`;
        request
            .post(genURL(PATH))
            .set('accept', 'json')
            .send([name, password])
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * wallet_import_key
     * @param {string} name wallet name.
     * @param {string} password wallet password.
     */
    api.import_key = async (name, password) => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/import_key`;
        request
            .post(genURL(PATH))
            .set('accept', 'json')
            .send([name, password])
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * wallet_list
     */
    api.list = async () => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/list_wallets`;
        request
            .get(genURL(PATH))
            .set('accept', 'json')
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * wallet_list_keys
     */
    api.list_keys = async (name, password) => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/list_keys`;
        request
            .post(genURL(PATH))
            .set('accept', 'json')
            .send([name, password])
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * wallet_get_public_keys
     */
    api.get_public_keys = async () => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/get_public_keys`;
        request
            .get(genURL(PATH))
            .set('accept', 'json')
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * wallet_set_timeout
     */
    api.set_timeout = async (timeout) => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/set_timeout`;
        request
            .post(genURL(PATH))
            .set('accept', 'json')
            .send(String(timeout))
            .end((err, res) => {
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    /**
     * wallet_sign_trx
     */
    api.wallet_sign_trx = async (x_action) => new Promise((resolve, reject) => {
        const PATH = `/v1/wallet/sign_transaction`;
        request
            .post(genURL(PATH))
            .set('accept', 'json')
            .send(x_action)
            .end((err, res) => {
                // console.log(res.req);
                if (res && res.body) return resolve(res.body);
                return reject(err ? err : new Error('no err or res'))
            });
    })

    return api;

}
