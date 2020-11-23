import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { PricingApi } from "../models/PricingFormula"

import debug from "debug";
debug('dodo');

/**
 * / route
 *
 * @class IndexRoute
 */
export class IndexRoute extends BaseRoute {

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static create(router: Router) {
        //log
        debug("[IndexRoute::create] Creating index route.");

        //add home page route
        router.get("/dodo", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
    }

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public index(req: Request, res: Response, next: NextFunction) {
        //set custom title
        this.title = "dodo";

        //set message
        let options: Object = {
            "message": "Only support http post"
        };
        (async function () {
            let json = await new PricingApi().getDodo();
            res.send(json);
        })();

        //render template
        // this.render(req, res, "index", options);
    }
}
