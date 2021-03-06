/* eslint-disable no-undef */
// !!! jest N'A PAS BESOIN D'IMPORTS => provoque une erreur :
// TypeError: (0 , _jest.default) is not a function
// import test from 'jest'
// import describe from 'jest'
// import expect from 'jest'
// import it from 'jest'


import { dateApp } from '../../src/utils/dateUtils'
import moment from 'moment';



// eslint-disable-next-line no-undef
test('VUE_APP_DATE updated', () => {
    process.env['VUE_APP_DATE'] = '2022-01-02';
    expect(process.env.VUE_APP_DATE).toBe('2022-01-02');
    // console.log("VUE_APP_DATE 2 : "  + process.env.VUE_APP_DATE)
})


// permet de regrouper plusieurs tests
describe('vue_app_date updated', () => {
    it('should return 2022-01-02',
        () => {
            process.env['vue_app_date'] = '2022-01-02';
            expect(process.env.vue_app_date).toBe('2022-01-02');

        }),
        it('dateApp should return 2022-01-02',
            () => {
                process.env['vue_app_date'] = '2022-01-02';
                expect(dateApp()).toBe('2022-01-02');
            }),
        it('dateApp should return toto',
            () => {
                process.env['vue_app_date'] = '';
                expect(dateApp()).toBe(moment().format('YYYY-MM-DD'));

            })
})


