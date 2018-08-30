import * as React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {renderToString} from 'react-dom/server';
import {render} from 'app';
import {Router} from 'express';

import {pageTemplate} from 'pageTemplate';
import {dataLoadController} from './data/dataLoadController';

export default function createMiddleware({assets}) {
    async function renderHtml() {
        /**
         * START WITHOUT STORE
         **/
        let content = renderToString(render());

        return pageTemplate({
            css: assets.main.css,
            js: assets.main.js,
            content
        });


        /**
         * START WITH STORE
         **/
        //
        // let data = await dataLoadController();
        //
        // let store = createStore(
        //    (state) => state,
        //    data
        // );
        //
        // let content = renderToString(
        //    <Provider store={store}>
        //        {render()}
        //    </Provider>
        // );
        //
        // return pageTemplate({
        //     css: assets.main.css,
        //     js: assets.main.js,
        //     content,
        //     data: JSON.stringify(data) // event.data
        // });
    }

    function serverMiddleware(req, res, next) {
        renderHtml(req, res)
            .then((content) => {
                res.send(content);
            })
            .catch((err) => {
                res.status(500).json({
                    message: err.message,
                    stack: err.stack
                });
            });
    }

    let appRouter = new Router();

    appRouter.get('/*', serverMiddleware);

    return appRouter;
}
