import os
import api
import unittest
import tempfile

@pytest.fixture
def setUp(self):
    self.db_fd, api.app.config['DATABASE'] = tempfile.mkstemp()
    api.app.config['TESTING'] = True
    self.app = api.app.test_client()
    with api.app.app_context():
        api.init_db()

def tearDown(self):
    os.close(self.db_fd)
    os.unlink(api.app.config['DATABASE'])