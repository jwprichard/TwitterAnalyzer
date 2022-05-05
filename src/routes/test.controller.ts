import * as Koa from "koa";
import * as Router from "koa-router";

const routerOpts: Router.IRouterOptions = {
  prefix: "/test"
};

const router: Router = new Router(routerOpts);

router.get("/", async (ctx: Koa.Context) => {
  ctx.body = ctx.request.query;
});

export default router;
