'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Appointments',
			[
				{
					physicianId: 14,
					patientId: 25,
					appointmentDate: '2021-05-10',
					description: 'Exam Analysis',
				},
				{
					physicianId: 14,
					patientId: 26,
					appointmentDate: '2021-05-18',
					description: 'Exam Analysis',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Appointments', null, {});
	},
};
