'use strict';

const bootstrap = require('../bootstrap');

describe('Bootstrap', () => {
  test('Calls actionProvider with consistent permissions', () => {
    const registerFn = jest.fn();

    global.strapi = {
      models: {},
      admin: {
        services: {
          permission: {
            actionProvider: {
              register: registerFn,
            },
          },
        },
      },
      plugins: {
        i18n: {
          services: {
            locales: {
              initDefaultLocale() {},
            },
          },
        },
      },
    };

    bootstrap();

    expect(registerFn.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Array [
            Object {
              "category": "Internationalization",
              "displayName": "Create",
              "pluginName": "i18n",
              "section": "settings",
              "subCategory": "Locales",
              "uid": "locale.create",
            },
            Object {
              "category": "Internationalization",
              "displayName": "Read",
              "pluginName": "i18n",
              "section": "settings",
              "subCategory": "Locales",
              "uid": "locale.read",
            },
            Object {
              "category": "Internationalization",
              "displayName": "Update",
              "pluginName": "i18n",
              "section": "settings",
              "subCategory": "Locales",
              "uid": "locale.update",
            },
            Object {
              "category": "Internationalization",
              "displayName": "Delete",
              "pluginName": "i18n",
              "section": "settings",
              "subCategory": "Locales",
              "uid": "locale.delete",
            },
          ],
        ],
      ]
    `);
  });
});
