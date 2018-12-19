import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'portal-ssr/models/test';

F.attach(QUnit);

QUnit.module('portal-ssr functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('portal-ssr main page shows up', function() {
  F('title').text('portal-ssr', 'Title is set');
});
