/**
 * Motif Platform Service API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Locale } from '../model/locale';
import { LocaleUpdate } from '../model/localeUpdate';
import { LocalesList } from '../model/localesList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LocalesService {

    protected basePath = 'http://localhost:8080/rest/v2';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Creates a locale
     * Creates a locale
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createLocale(body?: any, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createLocale(body?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createLocale(body?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createLocale(body?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post(`${this.basePath}/platform/locales`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a locale
     * Deletes a locale
     * @param locale Locale Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteLocale(locale: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteLocale(locale: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteLocale(locale: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteLocale(locale: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (locale === null || locale === undefined) {
            throw new Error('Required parameter locale was null or undefined when calling deleteLocale.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete(`${this.basePath}/platform/locales/${encodeURIComponent(String(locale))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a locale
     * Retrieves a locale
     * @param locale Locale Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLocale(locale: string, observe?: 'body', reportProgress?: boolean): Observable<Locale>;
    public getLocale(locale: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Locale>>;
    public getLocale(locale: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Locale>>;
    public getLocale(locale: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (locale === null || locale === undefined) {
            throw new Error('Required parameter locale was null or undefined when calling getLocale.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/platform/locales/${encodeURIComponent(String(locale))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves locales list
     * Retrieves locales list
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLocalesList(observe?: 'body', reportProgress?: boolean): Observable<LocalesList>;
    public getLocalesList(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LocalesList>>;
    public getLocalesList(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LocalesList>>;
    public getLocalesList(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/platform/locales`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a locale
     * Updates a locale
     * @param locale Locale Name
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateLocale(locale: string, body?: LocaleUpdate, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateLocale(locale: string, body?: LocaleUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateLocale(locale: string, body?: LocaleUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateLocale(locale: string, body?: LocaleUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (locale === null || locale === undefined) {
            throw new Error('Required parameter locale was null or undefined when calling updateLocale.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put(`${this.basePath}/platform/locales/${encodeURIComponent(String(locale))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}