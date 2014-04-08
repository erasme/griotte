#
# (c) 2013-2014 ERASME
#
# This file is part of griotte
#
# griotte is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# griotte is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with griotte. If not, see <http://www.gnu.org/licenses/>.

"""Server-side Multimedia groups blocks implementation

This module implements server-side code generated for multimedia blockly blocks.

.. module:: multimedia
   :platform: Unix

.. moduleauthor:: Michel Blanc <mblanc@erasme.org>

"""

import atexit
import logging

from griotte.scenario import Expecter

def set_background(strhex):
    """ Displays image

    Plays displays image returns

    :param media: The image to show, relative to the media root folder
    """
    logging.info("Setting background to %s" % strhex)
    Expecter().send('image.command.background', { "color": strhex })

def play_image(media, duration=0):
    """ Displays image

    Plays displays image returns

    :param media: The image to show, relative to the media root folder
    """
    logging.info("Playing image %s" % media)
    Expecter().send('image.command.start', { "media": media })

@atexit.register
def __goodbye__():
    Expecter().quit()