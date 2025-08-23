//import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export const getAppInsights = () => {
    //if (typeof window !== 'undefined') {
    //    const appInsights = new ApplicationInsights({
    //        config: {
    //            connectionString: process.env.NEXT_PUBLIC_APPLICATIONINSIGHTS_CONNECTION_STRING,
    //            enableAutoRouteTracking: true,
    //            enableAjaxPerfTracking: true, // Add this
    //            maxAjaxCallsPerView: 500, // Add this
    //            enableUnhandledPromiseRejectionTracking: true, // Add this
    //            autoTrackPageVisitTime: true, // Add this
    //            disableFetchTracking: false, // Add this
    //            enableCorsCorrelation: true, // Add this
    //            correlationHeaderDomains: ['*'], // Add this
    //            enableAjaxErrorStatusText: true, // Add this
    //            enableResponseHeaderTracking: true, // Add this
    //        }
    //    });

    //    appInsights.loadAppInsights();
    //    appInsights.trackPageView(); // Add this

    //    return appInsights;
    //}
    return null;
};

export const appInsights = getAppInsights();