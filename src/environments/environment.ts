
export const environment = {
  driverJoiningFormImgPath: '/assets/images/driver_joining_form/company_logo.jpg',
  MaxUploadLimit: 100,
  // For QA(Test) production
  // appSetting:{
  //   App_UserKey:"WP_Suite_QA",
  //   accessTokenKey:'WP_Suite_accessToken_QA',
  //   UserRightsKey:'WP_Suite_userRights_QA',
  //   FinancialYearKey:"WP_Suite_FinancialYear_QA",
  //   accessUrlKey:"WP_Suite_accessUrl_QA",
  //   initialYear: 2022,
  //   isShowCompanyLogo: false
  // },

  // For Live production
  appSetting:{
    App_UserKey:"WP_Suite",
    accessTokenKey:'WP_Suite_accessToken',
    UserRightsKey:'WP_Suite_userRights',
    FinancialYearKey:"WP_Suite_FinancialYear",
    accessUrlKey:"WP_Suite_accessUrl",
    initialYear: 2022,
    isShowCompanyLogo: true
  },
  mainHeaderTitle: "Car Carrier Unit",
  production: true,
  salesBill: {
    mahindraBillDebtorCity: "mumbai",//city
    ashokLeylandBillDebtorCity: "hosur",//city
    mahindraBillNoPrefix:"SML-F",
    ashokLeylandBillNoPrefix:"SML-AL-F"
  },
  supplierAddress: {
    name: "shree maruti",
    address1: "25, Poonam Arcade, Village : Hansalpur, Tal. Mandal,",
    city: "Ahmedabad",
    zipcode: "382150",
    signature: '/assets/images/signature/authorized_signature.png'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
