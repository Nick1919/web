module.exports = (sequelize, Datatypes) => {
	const posts = sequelize.define('posts', {
		title : {
			type:  Datatypes.STRING,
			allowNull: false
		},
		postText : {
			type:  Datatypes.STRING,
			allowNull: false
		},	
		userName : {
			type:  Datatypes.STRING,
			allowNull: false
		}
	});
	return posts;
}