
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface TestScript {
    id: string;
    testSuite?: TestSuite;
    name: string;
    category: number;
}

export interface IQuery {
    testSuites(): TestSuite[] | Promise<TestSuite[]>;
}

export interface TestSuite {
    id: string;
    name: string;
    testScripts?: TestScript[];
}
