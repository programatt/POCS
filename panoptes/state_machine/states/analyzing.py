from . import PanState


class State(PanState):

    def main(self):
        self.panoptes.say("Analyzing the images, I'll let you know what I find.")

        next_state = 'scheduling'

        return next_state
