import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import googleReview from './documents/googleReview'
import cities from './documents/cities'
import teamMember from './documents/teamMember'
import services from './documents/services'
import servicespage from './documents/servicespage'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,

  // Documents
  page,
  post,
  person,
  googleReview, // ✅ Move here
  cities,
  teamMember,
  services,
  servicespage,

  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
