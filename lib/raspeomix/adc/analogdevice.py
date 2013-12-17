#
# (c) 2013-2014 ERASME
#
# This file is part of Raspeomix
#
# Raspeomix is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# Raspeomix is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Raspeomix. If not, see <http://www.gnu.org/licenses/>.

from raspeomix.adc.profile import Profile
from raspeomix.adc.devices import *

class AnalogDevice:
    """ ADC Interface """

    def __init__(self, device=MCP342x()):
        self.device = device
        self.profiles = dict()

        for chan in self.device.channels():
            self.profiles[chan] = Profile('Identity')

    def __repr__(self):
        str_repr = "AnalogDevice("

        for chan in self.device.channels():
            str_repr += ", " + self.convert(chan).value

        return str_repr + ")"

    def set_profile(self, channel, profile):
        if channel not in self.profiles.keys():
            raise ValueError('No such analog channel')

        self.profiles[channel] = profile

    def convert(self, chanidx):
        self.profiles[chanidx].value = self.device.read_channel(chanidx,
                                                         self.profiles[chanidx].resolution,
                                                         self.profiles[chanidx].gain)
        return self.profiles[chanidx]