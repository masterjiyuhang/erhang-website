import { isDev } from '~/utils'

export default defineEventHandler(async (event) => {
  const res: any = await $fetch(
    `${useRuntimeConfig().public.PROD_CLIENT_PROXY_API}/hzh/fr/popularize/getShopPopularize`,
    {
      method: 'post',
      body: {
        id: '-1',
      },
    },
  ).catch((error) => {
    if (error.response?.status === 404) {
      return [] // 如果是 404 错误，返回空对象
    }
    throw error // 其他错误抛出
  })

  if (isDev()) {
    if (Object.keys(res.data).length === 0) {
      res.data.shopsDetailIfonInVo = [
        {
          id: 3030620,
          videoUrl:
            'http://1500012775.vod2.myqcloud.com/cb9e3785vodsh1500012775/01cb21b21253642700154702705/2QlVcOQpK4UA.mp4',
          openShopStatus: '1',
          shopStatus: '0',
          settleStatus: '2',
          hideStatus: '0',
          shopHide: '0',
          shopType: '1',
          submitTime: '2024-07-02T14:44:46',
          auditTime: '2024-07-02T14:49:56',
          mobile: '',
          contactsId: 3013769,
          shopScore: 179.8,
          responsivityTotle: 0.0,
          receptionTimes: 0,
          responsivity: 0,
          imResponsivity: 0,
          putThroughNum: 0,
          respondCount: 0,
          shopPoint: 17980,
          applicantName: '随叫随到莲富大厦',
          applicantMobile: '15840956565',
          advantageDescription: '水电费',
          shopId: 266059,
          uid: '0b855abc6b5c3a4efca91ac2592da2fc',
          verificated: '1',
          nameCn: '大连中英文全都有公司',
          nameEn: 'DLzhongyingwencececegongsi',
          countryId: 1,
          cityId: 2701,
          countryNameCn: '中国',
          cityNameCn: '大连',
          countryNameEn: 'China',
          cityNameEn: 'Dalian',
          estabYears: '2024-04-01',
          profileCn: 'dsfasdf',
          industrySector: 'Logistics',
          advantageCodeResultList: [
            {
              parentAdvantageCode: null,
              advantageCode: 'FCL',
            },
          ],
          businessLicens:
            'https://assets-dev.jctrans.com/COMPANY_LOGO/31dba56d-89d8-4886-a9ed-6bfb173a1eb9.png',
          shopOwnerEvaluateVoList: [
            {
              id: 12,
              compId: 3030620,
              ownerCompName: '是的范德萨发',
              evalContent: '神鼎飞丹砂',
              createTime: '2024-07-02T14:42:21',
            },
            {
              id: 13,
              compId: 3030620,
              ownerCompName: '第三方斯蒂芬',
              evalContent: '水电费第三方',
              createTime: '2024-07-02T14:46:29',
            },
          ],
          shopsAdvRoutesDtoList: [
            {
              id: 9156,
              type: '1',
              routeId: 20000000,
              cityId: 2701,
              cityRouteName: '大连 - 中国大陆线',
              cityRouteNameEn: 'Dalian - China Mainland',
            },
          ],
          vipList: [
            {
              name: 'JC Elite',
              code: 'JC Elite',
              start: '2024-04-18',
              expireAt: '2027-04-17',
              yearsAddUp: 3,
            },
            {
              name: 'CCP',
              code: 'CCP',
              start: '2024-04-18',
              expireAt: '2027-04-17',
              yearsAddUp: 3,
            },
          ],
          version: 4,
          companyVersion: 2,
          violationStatus: '0',
          onlineStatus: '0',
          sort: 1,
          companyId: 3030620,
          popularizeStatus: '1',
        },
        {
          id: 1000641,
          videoUrl:
            'https://tvod.jctrans.com/6cab3f97vodcq1500013416/f5db5b7c243791581378359831/PMyFNVB88goA.mp4',
          openShopStatus: '1',
          shopStatus: '0',
          settleStatus: '2',
          hideStatus: '0',
          shopHide: '0',
          shopType: '4',
          submitTime: '2022-12-11T14:41:07',
          auditTime: '2022-12-14T16:22:46',
          mobile: '',
          pnBindId: 1271,
          contactsId: 219279,
          jobTitleCn: '业务经理',
          headPortrait:
            'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CMC_CONTACT_PHOTO%2Ff6e2a148-29c5-4519-99e1-9835c0f5adfb',
          staffNameCn: '王经理',
          shopScore: 263.8,
          responsivityTotle: 0.56,
          receptionTimes: 95,
          responsivity: 76,
          imResponsivity: 19,
          putThroughNum: 39,
          respondCount: 56,
          shopPoint: 26380,
          createId: 223,
          shopId: 613,
          uid: 'e7dcc9d9f09e3dc09c98483b7aa058f3',
          verificated: '1',
          logoFile:
            'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2F70c5f39c-b807-471c-9f21-e0497521c0bd',
          nameCn: '栗融（上海）供应链管理有限公司',
          nameEn: 'USK (Shanghai) Supply Chain Co.,Ltd',
          countryId: 1,
          cityId: 4019,
          countryNameCn: '中国',
          cityNameCn: '上海',
          countryNameEn: 'China',
          cityNameEn: 'Shanghai',
          scale: 'small',
          estabYears: '2009-04-13',
          profileCn:
            '栗融（上海）供应链管理有限公司是一家经中华人民共和国商务部批准的海运一级货运代理企业，专业承办进出口货物的海运及其相关业务，包括订舱、中转、集装箱拼装拆箱、超尺寸货物的集装箱及散货运输、报关、报验、保险及相关的接转运输服务及咨询业务。\n    我们在美加航线上与多家国际著名航运组织建立长期合作关系，能够提供了方便、快捷、完善的直达美加基本港及美加内陆中转业务，拥有发达的配套网络，确保所有的服务优质完善。\n优势航线: 美加、中东印巴、台湾、日本',
          industrySector: 'Logistics',
          currentOfficeAddressCn: '上海市杨浦区翔殷路1128号 沪东金融大厦 14A座',
          addressCn: '上海市虹口区新建路203号底层8051室',
          addressEn:
            'Room 8051,First Floor,No.203 Xinjian Road,Hongkou District,Shanghai',
          advantageCodeResultList: [
            {
              parentAdvantageCode: null,
              advantageCode: 'FCL',
            },
          ],
          businessLicens:
            'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2F574c727f-646a-4450-b62c-60ed19724d77',
          companyPictureList: [
            {
              id: 9117,
              version: 1,
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2F815e115e-23a0-4751-8052-b8c4722b4df0',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9118,
              version: 1,
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2Ffb5fd855-173c-4c9c-968c-32fef993ddca',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9119,
              version: 1,
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2F13ce9cf3-ac20-42ee-ae5d-ae4954b9bf8a',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9120,
              version: 1,
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2Ff2643d1b-d761-48db-8ff8-6d3b2a8cf79d',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9121,
              version: 1,
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2F95a1d8f3-9fa3-4e7b-b0cd-e1a8b2deecde',
              isShow: '0',
              isVip: '0',
            },
          ],
          certificates: [
            {
              id: 9115,
              version: 1,
              fileName:
                'We are Shanghai Top-Lustre Logistics.Pls be free to contact us if you need any help',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2F4174076b-e0ff-43e8-ae63-c9a8f832e14a',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9116,
              version: 1,
              fileName: '默认证书名称',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2F7e8f02d1-f94f-4dd9-b656-e2180ae394f0',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9122,
              version: 1,
              fileName: 'JC Premium',
              fileType: '7',
              filePath:
                'https://assets.jctrans.com/COMMON_IMG_GEN/edaccb2f-c122-4d66-9902-e457cc2ae59b.png',
              isShow: '1',
              isVip: '1',
            },
            {
              id: 9123,
              version: 1,
              fileName: 'TSP',
              fileType: '7',
              filePath:
                'https://assets.jctrans.com/COMMON_IMG_GEN/3c766641-a57e-49dc-bb84-0bf13a7bfa98.png',
              isShow: '1',
              isVip: '1',
            },
          ],
          shopOwnerEvaluateVoList: [],
          airList: [
            {
              id: 358,
              name: '南航货运',
              nameEn: 'China Southern Cargo',
            },
          ],
          shippingList: [
            {
              id: 26,
              name: '太平',
              nameEn: 'PIL',
            },
            {
              id: 20,
              name: '东方海外',
              nameEn: 'OOCL',
            },
            {
              id: 16,
              name: '长荣',
              nameEn: 'EMC',
            },
            {
              id: 24,
              name: '海洋网联',
              nameEn: 'ONE',
            },
            {
              id: 19,
              name: '阳明',
              nameEn: 'YML2',
            },
          ],
          shopsAdvRoutesDtoList: [
            {
              id: 997,
              type: '2',
              routeId: 20000020,
              cityId: 4019,
              cityRouteName: '上海 - 中美线',
              cityRouteNameEn: 'Shanghai - Central America',
            },
            {
              id: 998,
              type: '2',
              routeId: 20000030,
              cityId: 4019,
              cityRouteName: '上海 - 东南亚线',
              cityRouteNameEn: 'Shanghai - Southeast Asia',
            },
            {
              id: 999,
              type: '2',
              routeId: 20000025,
              cityId: 4019,
              cityRouteName: '上海 - 中东线',
              cityRouteNameEn: 'Shanghai - Middle East',
            },
            {
              id: 1000,
              type: '2',
              routeId: 20000027,
              cityId: 4019,
              cityRouteName: '上海 - 日韩线',
              cityRouteNameEn: 'Shanghai - Japan-South Korea',
            },
            {
              id: 1001,
              type: '2',
              routeId: 20000024,
              cityId: 4019,
              cityRouteName: '上海 - 非洲线',
              cityRouteNameEn: 'Shanghai - Africa',
            },
            {
              id: 181,
              type: '1',
              routeId: 20000016,
              cityId: 4019,
              cityRouteName: '上海 - 美加线',
              cityRouteNameEn: 'Shanghai - United States-Canada',
            },
            {
              id: 182,
              type: '1',
              routeId: 20000015,
              cityId: 4019,
              cityRouteName: '上海 - 西非线',
              cityRouteNameEn: 'Shanghai - West Africa',
            },
            {
              id: 183,
              type: '1',
              routeId: 20000017,
              cityId: 4019,
              cityRouteName: '上海 - 中南美线',
              cityRouteNameEn: 'Shanghai - Central-South America',
            },
            {
              id: 184,
              type: '1',
              routeId: 20000011,
              cityId: 4019,
              cityRouteName: '上海 - 西北欧线',
              cityRouteNameEn: 'Shanghai - North-Western Europe',
            },
            {
              id: 185,
              type: '1',
              routeId: 20000003,
              cityId: 2759,
              cityRouteName: '南通 - 东南亚线',
              cityRouteNameEn: 'Nantong - Southeast Asia',
            },
          ],
          vipList: [
            {
              name: 'JC Premium',
              code: 'GCP',
              start: '2021-02-26',
              expireAt: '2027-02-25',
              yearsAddUp: 6,
              vipType: '2',
              vipCertificateWeb:
                'https://assets.jctrans.com/COMMON_IMG_GEN/edaccb2f-c122-4d66-9902-e457cc2ae59b.png',
              vipCertificatePrint:
                'https://assets.jctrans.com/COMMON_IMG_GEN/c92367c7-b1ee-4fd0-b62b-0a14326b6a87.png',
              vipLogoFile:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F4c6c36b0-185a-4abd-9b3d-426e4c854cf6.png',
            },
            {
              name: 'TSP',
              code: 'TSP',
              start: '2022-12-05',
              expireAt: '2027-12-04',
              yearsAddUp: 5,
              vipType: '2',
              vipCertificateWeb:
                'https://assets.jctrans.com/COMMON_IMG_GEN/3c766641-a57e-49dc-bb84-0bf13a7bfa98.png',
              vipCertificatePrint:
                'https://assets.jctrans.com/COMMON_IMG_GEN/f603278c-f178-4879-bb1c-ea18b20b3fb2.png',
              vipLogoFile:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F4c6c36b0-185a-4abd-9b3d-426e4c854cf6.png',
            },
          ],
          version: 2,
          companyVersion: 21,
          violationStatus: '0',
          onlineStatus: '0',
          sort: 2,
          companyId: 1000641,
          popularizeStatus: '1',
        },
        {
          id: 1001222,
          videoUrl:
            'https://tvod.jctrans.com/6cab3f97vodcq1500013416/4054df0c243791580732174422/qfbwh8jchFcA.mp4',
          openShopStatus: '1',
          shopStatus: '0',
          settleStatus: '2',
          hideStatus: '0',
          shopHide: '0',
          shopType: '4',
          submitTime: '2023-03-22T17:35:32',
          auditTime: '2023-03-24T18:46:04',
          mobile: '',
          pnBindId: 1303,
          contactsId: 65387,
          jobTitleCn: '销售部经理',
          headPortrait:
            'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CMC_CONTACT_PHOTO%2Fbffc5404-fb25-4650-9e86-3f65ae269cf0',
          staffNameCn: '尹代红',
          shopScore: 213.8,
          responsivityTotle: 0.33,
          receptionTimes: 15,
          responsivity: 50,
          imResponsivity: 1,
          putThroughNum: 14,
          respondCount: 1,
          shopPoint: 21380,
          createId: 223,
          shopId: 1120,
          uid: '3fce0f86451df022dcb7d4bc8d0c7cfb',
          verificated: '0',
          logoFile:
            'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2Fea0fa41d-70c9-4166-bbb7-5c0a701d006b',
          nameCn: '上海瀛环国睿供应链管理有限公司',
          nameEn: 'Shanghai Winwell Supplychain Management Ltd.',
          countryId: 1,
          cityId: 4019,
          countryNameCn: '中国',
          cityNameCn: '上海',
          countryNameEn: 'China',
          cityNameEn: 'Shanghai',
          scale: 'small',
          estabYears: '2020-06-01',
          profileCn:
            '上海瀛环国睿供应链管理有限公司（原是常熟外运上海分公司创立于2001年），经上海市交通委审核批准获得无船承运业务经营资格登记证。为客户提供专业的综合性物流服务，主营国际海运、空运、报关、报检、物流运输、仓储、国际多式联运、保险代理等多项业务。海运主要致力于打造中东、印巴、红海、东南亚、澳洲、欧洲、地中海、非洲等精品航线。主要与CMA/HMM/PIL/EMC/CNC/SITC/KMTC/HAL等船公司合作.空运主打孟加拉达卡（DAC）为您提供优质专业全程服务。',
          industrySector: 'Logistics',
          currentOfficeAddressCn: '虹口区保定路49号2，3，4楼',
          addressCn: '虹口区保定路49号2，3，4楼',
          addressEn: '2/3/4F,NO.49,Baoding Road,Hongkou District,Shanghai',
          advantageCodeResultList: [
            {
              parentAdvantageCode: null,
              advantageCode: 'FCL',
            },
            {
              parentAdvantageCode: null,
              advantageCode: 'Air Freight',
            },
            {
              parentAdvantageCode: null,
              advantageCode: 'Special Container',
            },
          ],
          businessLicens:
            'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2F9cc4d2d7-8618-4be2-95a9-5a2670e662f3',
          certificates: [
            {
              id: 9124,
              version: 1,
              fileName: 'Certificate of GCP membership',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2Fa43ebef0-a0fb-4176-80e4-4d2a556d8b71',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9125,
              version: 1,
              fileName: 'China Credit Pass',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2F8d473f63-d6f5-45ad-8bb8-322acf8861c2',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9126,
              version: 1,
              fileName: 'Certificate of GCP membership',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2F0fc5c84b-2194-492b-ae6f-1b12ff3820f9',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9127,
              version: 1,
              fileName: 'China Credit Pass',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2F24f79705-bd37-45c9-bb24-0593fa48ea7c',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9128,
              version: 1,
              fileName:
                'NVOCC of Shanghai Winwell International Logistics Co.,Ltd',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2F3890eb00-5c67-4707-b34f-445fe241e594',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9129,
              version: 1,
              fileName: 'TSP',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2Fc1dfe11d-9886-4371-8930-b7b4a0d6a0d0.png',
              isShow: '1',
              isVip: '1',
            },
            {
              id: 9130,
              version: 1,
              fileName: 'JC Premium',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F12a24994-d2f0-492a-ab5b-9749a33b1bf0.png',
              isShow: '1',
              isVip: '1',
            },
          ],
          shopOwnerEvaluateVoList: [],
          shippingList: [
            {
              id: 17,
              name: '达飞',
              nameEn: 'CMA',
            },
            {
              id: 21,
              name: '韩新海运',
              nameEn: 'HMM',
            },
            {
              id: 26,
              name: '太平',
              nameEn: 'PIL',
            },
            {
              id: 16,
              name: '长荣',
              nameEn: 'EMC',
            },
            {
              id: 54,
              name: '宏海箱运',
              nameEn: 'RCL',
            },
          ],
          shopsAdvRoutesDtoList: [
            {
              id: 960,
              type: '1',
              routeId: 20000003,
              cityId: 4019,
              cityRouteName: '上海 - 东南亚线',
              cityRouteNameEn: 'Shanghai - Southeast Asia',
            },
            {
              id: 961,
              type: '1',
              routeId: 20000007,
              cityId: 4019,
              cityRouteName: '上海 - 中东印巴线',
              cityRouteNameEn: 'Shanghai - Middle East-India-Pakistan',
            },
            {
              id: 962,
              type: '1',
              routeId: 20000008,
              cityId: 4019,
              cityRouteName: '上海 - 红海线',
              cityRouteNameEn: 'Shanghai - The Red Sea',
            },
            {
              id: 963,
              type: '1',
              routeId: 20000013,
              cityId: 4019,
              cityRouteName: '上海 - 东非线',
              cityRouteNameEn: 'Shanghai - East Africa',
            },
          ],
          vipList: [
            {
              name: 'JC Premium',
              code: 'GCP',
              start: '2015-11-02',
              expireAt: '2027-11-01',
              yearsAddUp: 12,
              vipCertificateWeb:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F12a24994-d2f0-492a-ab5b-9749a33b1bf0.png',
              vipCertificatePrint:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2Fdc7aad9f-3f32-4a32-a5ce-cdc435876ebb.png',
              vipLogoFile:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F4a5f7e0b-2782-4f2e-84a5-39e4f1f14e7e.png',
            },
            {
              name: 'TSP',
              code: 'TSP',
              start: '2022-07-01',
              expireAt: '2024-06-30',
              yearsAddUp: 2,
              vipCertificateWeb:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2Fc1dfe11d-9886-4371-8930-b7b4a0d6a0d0.png',
              vipCertificatePrint:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F59aa3a22-4ef2-4bd4-a613-dffb9ce4eff3.png',
              vipLogoFile:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F4a5f7e0b-2782-4f2e-84a5-39e4f1f14e7e.png',
            },
          ],
          version: 2,
          companyVersion: 16,
          violationStatus: '0',
          auditFlag: '0',
          onlineStatus: '0',
          sort: 3,
          companyId: 1001222,
        },
        {
          id: 3009232,
          videoUrl:
            'https://tvod.jctrans.com/6cab3f97vodcq1500013416/a2a45099243791580757515357/EA4ncpobAKsA.mp4',
          openShopStatus: '1',
          shopStatus: '0',
          settleStatus: '2',
          hideStatus: '0',
          shopHide: '0',
          shopType: '4',
          submitTime: '2023-03-23T20:00:18',
          auditTime: '2023-03-27T18:16:42',
          mobile: '',
          pnBindId: 1302,
          contactsId: 213700,
          jobTitleCn: '销售',
          staffNameCn: '康洁',
          shopScore: 213.0,
          responsivityTotle: 0.1,
          receptionTimes: 5,
          responsivity: 16,
          imResponsivity: 0,
          putThroughNum: 5,
          respondCount: 0,
          shopPoint: 21300,
          createId: 223,
          shopId: 67210,
          uid: '386e64257be1eec8d56ec0ffaadf1805',
          verificated: '1',
          logoFile:
            'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2F865a004a-5611-42db-aca7-a5a72267c83f',
          nameCn: '青岛长浩国际物流有限公司',
          nameEn: 'Qingdao Changhao International Logistics Co., Ltd',
          countryId: 1,
          cityId: 2815,
          countryNameCn: '中国',
          cityNameCn: '青岛',
          countryNameEn: 'China',
          cityNameEn: 'Qingdao',
          scale: 'small',
          estabYears: '2011-09-02',
          profileCn:
            '公司简介\n青岛长浩国际物流有限公司是国家经贸部批准的一级国际货运\n代理有限公司。同时也是国家交通部批准的无船承运人，编号 MOC-\nNV06787。主要承办进出口货物的海运、空运、海铁联运、多式联运、\n散杂货、滚装货物等国际货物运输代理业务；可提供租船、定舱、配\n载、制单、报关、报验、海运保险、拖车、中转运输、集装箱存贮、\n仓储、装卸加固物流配送等全套货代服务。\n公司成立于 2011 年 9 月，经过长期努力在货运服务行业积累\n了丰富的经验和良好的口碑。与 YML、COSCO、MSC、CMA、PIL、\nEVERGREEN、 大韩、港龙、韩亚、国航、东航、澳航、印尼航空、阿\n联酋航空、马航、美联合、阿联酋阿提哈德航空、立荣航空、全日空\n等多家航运公 司建立了密切的长期合作关系；在欧地、东南亚、中东、\n非洲、澳洲、 美加、日韩、俄罗斯等航线为您提供极具竞争力的价格\n和服务。在特重大型机械设备，框架箱、开顶箱等特种箱的操作具有\n丰富的经验。\n多年来，我公司在新老客户、同行、船公司、铁路运输系统的大\n力支持下不断发展壮大。我们深信并恪守一个企业要做强、做大，不\n仅要具备有竞争力的价格，更要具备优质的服务和高素质的团队。\n衷心希望与您诚挚合作，携手共铸辉煌！\n优势航线\n青岛长浩国际物流有限公司专注于中国-俄罗斯专线运输，承接俄\n罗斯远东基本港及内陆点。海运直达海参崴，航程高效、稳定，内陆\n面向俄罗斯全板块，海铁、陆多式联运，运输成本低、安全性高、运\n输周期稳定、全程货物跟踪查询，可提供拆箱、仓储、清关、装箱加\n固、集装箱租赁、门到门等综合性物流服务，给客户提供境外经营的\n安全保障，专业团队为不同货物提供优质的高效率物流方案。\n企业理念\n航线有终点，服务无止境。“优质、安全、高效”\n坚持规范化管理，人性化服务的宗旨。以诚信、务实、稳健的经营作\n风，时刻履行长浩对各个服务对象的承诺。\n核心竞争力\n产品物流：物流系统设计的核心\n产品为企业创造受益，物流渠道内流动的是产品，因此产品才是物\n流系统设计的核心所在。 对这个基本问题的清楚理解，是形成良好\n物流系统设计的关键，也是物流系统设计中将产品的基本衡量尺度\n(以产品特征、包装和价格为代表)视做客户服务要素加以研究的重要\n原因。\n1.普通商品物流：提供产品销售物流一揽子解决方案，从产品下线一\n直到世界各地，其中包含干线运输、各地中转库管理、区域配送等。\n2.特殊商品物流：主要针对于有特殊运输要求的特殊类商品，提供运\n输所必须的特种集装箱，特殊包装，特别捆扎加固等合理的物流方\n案。\n3.机械设备物流：提供方案策划、门到门远洋运输、空运、进口清关、\n配送、超大件运输等。\n4.工程物流 ：在电力物流、石化物流等大型项目中的工程设备的物流\n运输具有丰富的经验和超强的实力，提供从方案设计、项目管理、\n内支线运输、远洋运输、空运、清关、超大件运输、驳船转运等一\n站式的服务。\n5.船舶贸易：进口清关、船舶代理、换旗等。',
          industrySector: 'Logistics',
          currentOfficeAddressCn:
            '青岛市市北区龙城路31号卓越世纪中心4号楼2012室',
          addressEn:
            'Room2012,Building 4,Excellence Century Center,No 31,Longcheng Road Qingdao',
          advantageCodeResultList: [
            {
              parentAdvantageCode: null,
              advantageCode: 'FCL',
            },
            {
              parentAdvantageCode: null,
              advantageCode: 'LCL',
            },
            {
              parentAdvantageCode: null,
              advantageCode: 'Special Container',
            },
            {
              parentAdvantageCode: null,
              advantageCode: 'Hazardous Cargo',
            },
            {
              parentAdvantageCode: null,
              advantageCode: 'Break Bulk',
            },
          ],
          companyPictureList: [
            {
              id: 9140,
              version: 1,
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_PICTURE%2F513a0dec-7927-45b6-80ce-98d82229c9c3',
              isShow: '0',
              isVip: '0',
            },
          ],
          certificates: [
            {
              id: 9136,
              version: 1,
              fileName: 'BUSINESS LICENSE',
              fileType: '6',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2F97aedec1-fd62-4ae5-9b96-f1f434380113',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9137,
              version: 1,
              fileName: 'WCA',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2F42fd2c93-c400-449d-b3b6-03d340278133',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9138,
              version: 1,
              fileName: 'MEMBERSHIP CERTIFICATE',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2F5bdd45c4-3296-475f-95f9-20c36e20b4f7',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9139,
              version: 1,
              fileName: 'DECLARE AT CUSTOMS',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/CERTIFICATE%2Fb43b43a8-0b39-4548-8cb9-1246f8959597',
              isShow: '0',
              isVip: '0',
            },
            {
              id: 9141,
              version: 1,
              fileName: 'JC Premium',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F0a0d6102-b5be-43a0-9afb-b6175c730d36.png',
              isShow: '1',
              isVip: '1',
            },
            {
              id: 9142,
              version: 1,
              fileName: 'TSP',
              fileType: '7',
              filePath:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2Fb42b215b-ebb3-49a1-a9c6-7e685d825388.png',
              isShow: '1',
              isVip: '1',
            },
          ],
          shopOwnerEvaluateVoList: [],
          shopsAdvRoutesDtoList: [
            {
              id: 659,
              type: '1',
              routeId: 20000005,
              cityId: 2815,
              cityRouteName: '青岛 - 俄罗斯远东线',
              cityRouteNameEn: 'Qingdao - Russian Far East',
            },
          ],
          vipList: [
            {
              name: 'JC Premium',
              code: 'GCP',
              start: '2023-09-11',
              expireAt: '2024-09-10',
              yearsAddUp: 2,
              vipType: '1',
              vipCertificateWeb:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F0a0d6102-b5be-43a0-9afb-b6175c730d36.png',
              vipCertificatePrint:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F3dbe8900-b0b5-4462-a05c-6337ed57f290.png',
              vipLogoFile:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2Fbf3fee6d-ad10-4019-bb6b-78c144b284db.png',
            },
            {
              name: 'TSP',
              code: 'TSP',
              start: '2023-09-11',
              expireAt: '2024-09-10',
              yearsAddUp: 2,
              vipType: '1',
              vipCertificateWeb:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2Fb42b215b-ebb3-49a1-a9c6-7e685d825388.png',
              vipCertificatePrint:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2F871032d2-7c30-4457-a2b9-968f48595ce7.png',
              vipLogoFile:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMMON_IMG_GEN%2Fbf3fee6d-ad10-4019-bb6b-78c144b284db.png',
            },
          ],
          version: 2,
          companyVersion: 9,
          violationStatus: '0',
          auditFlag: '0',
          seaportList: [
            {
              id: 10000860,
              seaportNameCn: '符拉迪沃斯托克(海参崴)',
              seaportNameEn: 'VLADIVOSTOK',
            },
            {
              id: 10000847,
              seaportNameCn: '圣彼得堡',
              seaportNameEn: 'ST.PETERSBURG',
            },
          ],
          onlineStatus: '0',
          sort: 4,
          companyId: 3009232,
        },
      ]
    }
  }
  return res
})
