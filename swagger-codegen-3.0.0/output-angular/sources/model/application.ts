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

export interface Application { 
    name: string;
    description?: string;
    category?: string;
    offline?: boolean;
    needsActivation?: boolean;
    otpReuse?: boolean;
    otpFormat?: string;
    otpLength?: number;
    otpExpiry?: string;
    otpMaxFailures?: number;
    instanceKeyLength?: number;
    viperaSerialFormat?: string;
    viperaSerialLength?: number;
    registerPasswd?: boolean;
    registerUser?: boolean;
    userIdFormat?: string;
    userIdLength?: number;
    passwordHistory?: number;
    passwordMaxFailures?: number;
    allowMultipleSessions?: boolean;
    allowMultipleInstall?: boolean;
    verifyClientIp?: boolean;
    passwordExpiry?: string;
    passwordFormat?: string;
    encryptActive?: boolean;
}