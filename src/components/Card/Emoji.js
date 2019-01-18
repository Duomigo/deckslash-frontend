import React from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'

class Moji extends React.Component {
    render() {
        return(
            <div>
                <Picker set='emojione' />
<Picker onSelect={this.addEmoji} />
<Picker title='Pick your emoji…' emoji='point_up' />
<Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
            </div>
        )
    }
}

export default Moji;