export type State = 'all' | 'rising' | 'fresh'

export interface Article {
  type_of: string
  id: string
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: string
  public_reactions_count: string
  collection_id: string
  published_timestamp: string
  positive_reactions_count: string
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: string
  edited_at: string
  crossposted_at: string
  published_at: string
  last_comment_at: string
  reading_time_minutes: string
  tag_list: string
  tags: string
  user: User
  organisation: Organisation
  flare_tag: FlareTag
}

export type Articles = Article[]

export interface User {
  name: string
  username: string
  twitter_username: string
  github_username: string
  user_id: string
  website_url: string
  profile_image: string
  profile_image_90: string
}

export interface Organisation {
  name: string
  username: string
  slug: string
  profile_image: string
  profile_image_90: string
}

export interface FlareTag {
  name: string
  bg_color_hex: string
  text_color_hex: string
}

export interface SiteConfig {
  nav?: NavItem[] | false
  sidebar?: SideBarItem[]
}

// navbar --------------------------------------------------------------------

export type NavItem = NavItemWithLink | NavItemWithChildren

export interface NavItemBase {
  text: string
  target?: string
  rel?: string
  ariaLabel?: string
  activeMatch?: string
}

export interface NavItemWithLink extends NavItemBase {
  link: string
}

export interface NavItemWithChildren extends NavItemBase {
  items: NavItemWithLink[]
}

// sidebar -------------------------------------------------------------------

export type SideBarItem = SideBarLink | SideBarGroup

export interface SideBarLink {
  text: string
  link: string
}

export interface SideBarGroup extends SideBarLink {
  children: SideBarItem[]
}

export type UserAccount = {
  version: number
  userId: number
  userName: string
  isMain: string
  status: string
  fromSys: string
  auditFlag: string
  gender: string
  nameCn: string
  nameEn: string
  jobTitleCn: string
  jobTitleEn: string
  headPortrait: string
  whatsapp: string
  account: string
  mobile: string
  mobileValidFlag: string
  areaCode: string
  countryId: number
  email: string
  emailValidFlag: string
  createTime: string
  jcpayFlag: string
}

export type UserCompany = {
  version: number
  compId: number
  compName: string
  verificated: string
  status: string
  violationStatus: string
  auditFlag: string
  fromSys: string
  transactionStatus: string
  memberCode: string
  nameCn: string
  nameEn: string
  countryId: number
  cityId: number
  countryNameCn: string
  countryNameEn: string
  cityNameCn: string
  cityNameEn: string
  scale: string
  estabYears: string
  registeredAddressCn: string
  registeredAddressEn: string
  officeAddressCn: string
  officeAddressEn: string
  industrySector: string
  tel: string
  logoFile: string
  twitter: string
  youtube: string
  facebook: string
  linkedIn: string
  compVips: {
    name: string
    code: string
    start: string
    expireAt: string
    yearsAddUp: number
  }[]
  compTags: undefined[]
  regCapital: string
  registeredNumber: string
}

export type UserCompanyInfoResponse = {
  code: number
  data: {
    account: UserAccount
    company: UserCompany
  }
  msg: string
  subcode: number | string | null

  [key: string]: any
}

export type BaseResponseType = {
  code: number
  data: any
  msg: string
  subcode: number | string | null

  [key: string]: any
}
