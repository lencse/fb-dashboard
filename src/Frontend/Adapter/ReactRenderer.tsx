import Renderer from '../Application/Renderer'
import * as React from 'react'
import * as ReactDom from 'react-dom'
import Main from './Component/Main'

export default class ReactRenderer implements Renderer {

    public attach(): void {
        ReactDom.render(
            <Main />,
            document.getElementById('react-root')
        )
    }

}
