# Settings defined here and imported into app as an object:
#   app.config.from_object('settings')

# If a settings_local.py file exists it will be imported at the end.
# Use settings_local.py to overwrite settings for your local env.

DEBUG = False

try:
    from settings_local import *
except ImportError:
    pass
