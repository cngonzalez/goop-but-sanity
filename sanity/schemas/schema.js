import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from './documents/page'
import person from './documents/person'
import category from './documents/category'
import product from './documents/product'
import route from './documents/route'

import hub from './pages/hub'
// import listicle from './pages/listicle'

import listItem from './pages/page-components/listItem'
import listNumber from './pages/page-components/listNumber'
import hr from './pages/page-components/hr'
import productDisplay from './pages/page-components/productDisplay'
import articleDisplay from './pages/page-components/articleDisplay'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      hub,
      // listicle,
      listItem,
      listNumber,
      productDisplay,
      articleDisplay,
      hr,
      page,
      route,
      person,
      category,
      product,
    ])
})
