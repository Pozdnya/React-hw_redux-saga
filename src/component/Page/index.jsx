import React, { memo } from 'react'
import { connect } from 'react-redux';

import style from './style.module.css'
import profile from "./images/profile.png";
import cat from './images/cat.png';
import logo from "./images/logo.png";
import { incrementCounter, decrementCounter } from '../redux/actions'



const Page = (counter) => {
	console.log(counter)
	const user = "John Doe"
	return (
		<div className={style.wrapper}>
			<div className={style.head}>{user}</div>
			<div className={style.cell}>
				<div className={style.profile}>
					<p className={style.p}>{user} Profile</p>
					<img src={profile} className={style.photo} alt="" />
				</div>
				<div className={style.buttons}>
					<div className={style.followers}>
						<div className={style.text}>
							<p>{counter.counterFollowings}</p>
							<p>Followers</p>
						</div>
						<div className={style.clickers}>
							<button onClick={() => counter.incrementCounter()}>+</button>
							<button>-</button>
						</div>
					</div>
					<div className={style.following}>
						<div className={style.text}>
							<p>{counter.counterFollowers}</p>
							<p>Following</p>
						</div>
						<div className={style.clickers}>
							<button>+</button>
							<button>-</button>
						</div>
					</div>
				</div>
			</div>
			<img src={cat} className={style.catPhoto} alt="" />
			<footer className={style.footer}>
				<div className="left-footer foot-text">
					<p>365 Freebies. 007/365</p>
				</div>
				<div className="center-footer">
					<img src={logo} alt="" />
				</div>
				<div className="rigth-footer foot-text">
					<p>@anakarenart</p>
				</div>
			</footer>
		</div>

	)
}

const mapStatetoProps = state => {
	//console.log(state.counter.counterFollower)
	return {
		counterFollowings: state.counter.counterFollowing,
		counterFollowers: state.counter.counterFollower
	}
}

// bindActionCreators(
//     {
//       increaseCounter: actions.incrementCounter,
//       decreaseCounter: actions.decrementCounter
//     },
//     dispatch
//   );

const mapDispatchToProps = {
	incrementCounter,
	decrementCounter
}


export default connect(mapStatetoProps, mapDispatchToProps)(memo(Page))

