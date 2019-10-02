enum Action {
  PRODUCT_DETAIL_API_PRODUCT_DESCRIPTION = 'PRODUCT_DETAIL_API_PRODUCT_DESCRIPTION',
  PRODUCT_DETAIL_API_PRODUCT_CONTENTS = 'PRODUCT_DETAIL_API_PRODUCT_CONTENTS',
  REVIEW_API_PRODUCT_REVIEWS = 'REVIEW_API_PRODUCT_REVIEWS',
  REVIEW_API_REPORT_ABUSE = 'REVIEW_API_REPORT_ABUSE',
  REVIEW_LIKE_API_REVIEWS_LIKE = 'REVIEW_LIKE_API_REVIEWS_LIKE',
  REVIEW_LIKE_API_ADD_REVIEW_LIKE = 'REVIEW_LIKE_API_ADD_REVIEW_LIKE',
  REVIEW_LIKE_API_REMOVE_REVIEW_LIKE = 'REVIEW_LIKE_API_REMOVE_REVIEW_LIKE',
  SEO_CONTENT_API_SEO_CONTENT_DISPLAY = 'SEO_CONTENT_API_SEO_CONTENT_DISPLAY',
  CONTENT_API_TOPICS = 'CONTENT_API_TOPICS',
  CONTENT_API_QUESTIONS = 'CONTENT_API_QUESTIONS',
  CONTENT_API_SUPPORTS = 'CONTENT_API_SUPPORTS',
  CONTENT_API_SUGGESTIONS = 'CONTENT_API_SUGGESTIONS',
  BROWSING_HISTORY_API_USER_HISTORIES = 'BROWSING_HISTORY_API_USER_HISTORIES',
  PRODUCT_SEARCH_API_RESOLVED_QUERIES = 'PRODUCT_SEARCH_API_RESOLVED_QUERIES',
  PRODUCT_SEARCH_API_AGGREGATIONS = 'PRODUCT_SEARCH_API_AGGREGATIONS',
  PRODUCT_SEARCH_API_CAMPAIGNS = 'PRODUCT_SEARCH_API_CAMPAIGNS',
  SEARCH_API_SEARCH = 'SEARCH_API_SEARCH',
  SIDE_MENU_JSON_PATH = 'SIDE_MENU_JSON_PATH',
  CATALOG_API_SIZE_CHART = 'CATALOG_API_SIZE_CHART',
  SEARCH_API_PRODUCT_GROUPS = 'SEARCH_API_PRODUCT_GROUPS',
  SEARCH_API_GET_AGGREGATIONS = 'SEARCH_API_GET_AGGREGATIONS',
  ADDRESS_API_COUNTRY = 'ADDRESS_API_COUNTRY',
  ADDRESS_API_CITIES = 'ADDRESS_API_CITIES',
  MOBILE_SERVICE_LOGOUT = 'MOBILE_SERVICE_LOGOUT',
  MOBILE_SERVICE_ADD_TO_BASKET = 'MOBILE_SERVICE_ADD_TO_BASKET',
  MOBILE_SERVICE_GET_BASKET = 'MOBILE_SERVICE_GET_BASKET',
  MOBILE_SERVICE_REMOVE_BASKET = 'MOBILE_SERVICE_REMOVE_BASKET',
  MOBILE_SERVICE_UPDATE_BASKET = 'MOBILE_SERVICE_UPDATE_BASKET',
  MOBILE_SERVICE_GET_BASKET_ITEM_COUNT = 'MOBILE_SERVICE_GET_BASKET_ITEM_COUNT',
  COUPON_API_GET_COUPONS = 'COUPON_API_GET_COUPONS',
  MOBILE_SERVICE_GET_EXPIRED_BASKET = 'MOBILE_SERVICE_GET_EXPIRED_BASKET',
  MOBILE_SERVICE_CHECKOUT_USE_CAMPAIGN = 'MOBILE_SERVICE_CHECKOUT_USE_CAMPAIGN',
  MOBILE_SERVICE_CHECKOUT_USE_COUPON = 'MOBILE_SERVICE_CHECKOUT_USE_COUPON',
  MOBILE_SERVICE_CHECKOUT_REMOVE_COUPON = 'MOBILE_SERVICE_CHECKOUT_REMOVE_COUPON',
  MOBILE_SERVICE_CHECKOUT_REMOVE_CAMPAIGN = 'MOBILE_SERVICE_CHECKOUT_REMOVE_CAMPAIGN',
  MOBILE_SERVICE_GET_ALTERNATIVE_PAYMENT_COUNTRIES = 'MOBILE_SERVICE_GET_ALTERNATIVE_PAYMENT_COUNTRIES',
  MOBILE_SERVICE_CHECKOUT_PROCESS_ORDER = 'MOBILE_SERVICE_CHECKOUT_PROCESS_ORDER',
  FAVORITE_PRODUCT_API_GET_FAVORITES = 'FAVORITE_PRODUCT_API_GET_FAVORITES',
  FAVORITE_PRODUCT_API_POST_FAVORITE = 'FAVORITE_PRODUCT_API_POST_FAVORITE',
  FAVORITE_PRODUCT_API_DELETE_FAVORITE = 'FAVORITE_PRODUCT_API_DELETE_FAVORITE',
  FAVORITE_API_LIST_BY_BOUTIQUE_ID = 'FAVORITE_API_LIST_BY_BOUTIQUE_ID',
  FAVORITE_API_LIST_BY_BOUTIQUE_ID_LIST = 'FAVORITE_API_LIST_BY_BOUTIQUE_ID_LIST',
  FAVORITE_API_ADD_FAVORITE = 'FAVORITE_API_ADD_FAVORITE',
  FAVORITE_API_DELETE_FAVORITE = 'FAVORITE_API_DELETE_FAVORITE',
  FAVORITE_API_IS_FAVORITE = 'FAVORITE_API_IS_FAVORITE',
  ORDER_API_CORE_ORDERS = 'ORDER_API_CORE_ORDERS',
  AUTHORIZATION_API_TOKENS_VALIDATE = 'AUTHORIZATION_API_TOKENS_VALIDATE',
  USER_API_GET_USER = 'USER_API_GET_USER',
  USER_ACCOUNT_API_GET_USER_ADDRESSES = 'USER_ACCOUNT_API_GET_USER_ADDRESSES',
  USER_ACCOUNT_API_DELETE_USER_ADDRESS = 'USER_ACCOUNT_API_DELETE_USER_ADDRESS',
  USER_ACCOUNT_API_ADD_USER_ADDRESS = 'USER_ACCOUNT_API_ADD_USER_ADDRESS',
  USER_ACCOUNT_API_UPDATE_USER_ADDRESS = 'USER_ACCOUNT_API_UPDATE_USER_ADDRESS',
  SUGGESTION_API_SUGGESTIONS = 'SUGGESTION_API_SUGGESTIONS',
  PRODUCT_RECOMMENDATION_API_CROSS_CATEGORY = 'PRODUCT_RECOMMENDATION_API_CROSS_CATEGORY',
  PRODUCT_RECOMMENDATION_API_PRODUCT_RECOMMENDATION = 'PRODUCT_RECOMMENDATION_API_PRODUCT_RECOMMENDATION',
  CUSTOM = 'CUSTOM',
  CAMPAIGN_DETAIL_API_CAMPAIGNS = 'CAMPAIGN_DETAIL_API_CAMPAIGNS',
  CAMPAIGN_SEARCH_API_CAMPAIGNS = 'CAMPAIGN_SEARCH_API_CAMPAIGNS',
  CAMPAIGN_SEARCH_API_CAMPAIGN_TYPES = 'CAMPAIGN_SEARCH_API_CAMPAIGN_TYPES',
  CATALOG_API_BRAND_CATEGORY = 'CATALOG_API_BRAND_CATEGORY',
  CATALOG_API_PRODUCT_DETAIL = 'CATALOG_API_PRODUCT_DETAIL',
  PRODUCT_SEARCH_API_PRODUCT_CONTENTS = 'PRODUCT_SEARCH_API_PRODUCT_CONTENTS',
  PRODUCT_SEARCH_API_PRODUCTS = 'PRODUCT_SEARCH_API_PRODUCTS',
  PRODUCT_SHARE_API_SHARE = 'PRODUCT_SHARE_API_SHARE',
  CONTRACT_API_URL_CONTRACTS = 'CONTRACT_API_URL_CONTRACTS',
  CONTENT_API_CONTRACTS = 'CONTENT_API_CONTRACTS',
  CHECKOUT_API_GET_SUMMARY = 'CHECKOUT_API_GET_SUMMARY',
  CONTRACT_API_GET_SALES_CONTRACTS = 'CONTRACT_API_GET_SALES_CONTRACTS',
  COLLECTION_API_GET_COLLECTION = 'COLLECTION_API_GET_COLLECTION',
  COLLECTION_API_GET_FAVORITE = 'COLLECTION_API_GET_FAVORITE',
  COLLECTION_API_ADD_FAVORITE = 'COLLECTION_API_ADD_FAVORITE',
  COLLECTION_API_REMOVE_FAVORITE = 'COLLECTION_API_REMOVE_FAVORITE',
  COLLECTION_API_GET_RECENTLY_ADDED = 'COLLECTION_API_GET_RECENTLY_ADDED',
  SELLER_REVIEW_API_GET_APPLICABLE_DELIVERIES = 'SELLER_REVIEW_API_GET_APPLICABLE_DELIVERIES',
  SELLER_REVIEW_API_ADD_REVIEW = 'SELLER_REVIEW_API_ADD_REVIEW',
  COUPON_API_V2_GET_COUPONS = 'COUPON_API_V2_GET_COUPONS',
  AUTHENTICATION_API_GET_ACCESS_TOKEN = 'AUTHENTICATION_API_GET_ACCESS_TOKEN',
  USER_API_CREATE_USER_WITH_ONLY_PASSWORD = 'USER_API_CREATE_USER_WITH_ONLY_PASSWORD',
  MOBILE_SERVICE_USER_API_GET_USER_NOTIFICATION_PREFERENCE = 'MOBILE_SERVICE_USER_API_GET_USER_NOTIFICATION_PREFERENCE',
  MOBILE_SERVICE_USER_API_UPDATE_USER_NOTIFICATION_PREFERENCE = 'MOBILE_SERVICE_USER_API_UPDATE_USER_NOTIFICATION_PREFERENCE',
  WEB_BRAND_CATEGORY_API = 'WEB_BRAND_CATEGORY_API',
  ORDER_CORE_API_ORDER_DETAIL = 'ORDER_CORE_API_ORDER_DETAIL',
  ORDER_CORE_API_ORDERS = 'ORDER_CORE_API_ORDERS'
}

type ActionType = Action | string;

export { Action, ActionType };
