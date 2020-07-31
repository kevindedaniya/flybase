import React from 'react';

import Box from 'components/Box/Box';

import './Playarea.style.sass';

class Playarea extends React.Component {
	constructor() {
		super();

		this.state = {
			boxes: [
				{
					id: 1,
				},
			],
			isKeyControlDisabled: false,
		};
	}

	addBox = () => {
		this.setState({ boxes: [...this.state.boxes, { id: (this.state.boxes.length + 1) }] });
	}

	removeBox = (boxId) => {
		const index = this.state.boxes.findIndex(function (box) {
			return box.id === boxId;
		});
		
		this.setState({
			boxes: this.state.boxes.filter((_, i) => i !== index),
		});
	}

  render() {
		return (
			<div className="playarea">
				<button className="playarea__button"
					onClick={ this.addBox }>+ Box</button>
				<input 
					type="checkbox" 
					id="disableKeyControl" 
					onChange={ () => this.setState({ isKeyControlDisabled: !this.state.isKeyControlDisabled }) }/>
				<label htmlFor="disableKeyControl">Disable Key Control</label>

				<div className="playarea__container">
					{ 
						this.state.boxes.map((box) => (
							<Box 
								key={ box.id } 
								id={ box.id } 
								removeBox={ this.removeBox } 
								isKeyControlDisabled={ this.state.isKeyControlDisabled }
							/>
						)) 
					}
				</div>
			</div>
		);
	}
}

export default Playarea;