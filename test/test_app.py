import unittest
from app import app

class TestIndex(unittest.TestCase):
    def setUp(self):
        self.test_app = app.test_client()

    def test_index_exists(self):
        response = self.test_app.get('/')
        self.assertEquals(response.status, "200 OK")
