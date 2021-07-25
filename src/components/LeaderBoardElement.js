// import React, { Component } from 'react';
// import { connect } from 'react-redux'

// class LeaderBoardElement extends Component {
//   render() {
//     return (
//       <div>
//           team.forEach((member) => {
//   let newRow = document.createElement("li");
//   newRow.classList = "c-list__item";
//   newRow.innerHTML = `
// 		<div class="c-list__grid">
// 			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
// 			<div class="c-media">
// 				<img class="c-avatar c-media__img" src="${member.img}" />
// 				<div class="c-media__content">
// 					<div class="c-media__title">${member.name}</div>
// 					<a class="c-media__link u-text--small" href="https://instagram.com/${
//             member.handle
//           }" target="_blank">@${member.handle}</a>
// 				</div>
// 			</div>
// 			<div class="u-text--right c-kudos">
// 				<div class="u-mt--8">
// 					<strong>${member.kudos}</strong> ${randomEmoji()}
// 				</div>
// 			</div>
// 		</div>
// 	`;
//   if (member.rank === 1) {
//     newRow.querySelector(".c-place").classList.add("u-text--dark");
//     newRow.querySelector(".c-place").classList.add("u-bg--yellow");
//     newRow.querySelector(".c-kudos").classList.add("u-text--yellow");
//   } else if (member.rank === 2) {
//     newRow.querySelector(".c-place").classList.add("u-text--dark");
//     newRow.querySelector(".c-place").classList.add("u-bg--teal");
//     newRow.querySelector(".c-kudos").classList.add("u-text--teal");
//   } else if (member.rank === 3) {
//     newRow.querySelector(".c-place").classList.add("u-text--dark");
//     newRow.querySelector(".c-place").classList.add("u-bg--orange");
//     newRow.querySelector(".c-kudos").classList.add("u-text--orange");
//   }
//   list.appendChild(newRow);
// });

// // Find Winner from sent kudos by sorting the drivers in the team array
// let sortedTeam = team.sort((a, b) => b.sent - a.sent);

//       </div>
//     );
//   }
// }

// export default LeaderBoardElement;
