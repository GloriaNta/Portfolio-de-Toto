import './ProfilCard.css';

const ProfilCard = ({ pro, img, name, town, job, skills }) => {
	name = name || 'Anonym';
	job = job || 'unemployed';

	let skillsList = null;

	if (skills) {
		skillsList = (
			<>
				<h6>Skills</h6>
				<ul>
					{skills.map((s) => (
						<li>{s}</li>
					))}
				</ul>
			</>
		);
	}

	return (
		<div className="profil-card">
			{pro && <span className="pro">PRO</span>}
			<img className="round" src={img || 'https://randomuser.me/api/portraits/lego/5.jpg'} alt="user" />
			<h3>{name}</h3>
			<h6>{town}</h6>
			<p>{job}</p>
			<div className="buttons">
				<button className="primary">Message</button>
				<button className="primary ghost">Following</button>
			</div>
			<div className="skills">{skillsList}</div>
		</div>
	);
};

export default ProfilCard;
