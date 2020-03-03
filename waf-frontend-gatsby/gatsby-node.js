/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions
    // Make the front page match everything client side.

    console.log('page: ', page)
    if (page.path === `/`) {
        page.matchPath = `/*`
        createPage(page)
    }
}