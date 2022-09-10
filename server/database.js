const random = require('random');

module.exports = () => {
    const api = {
        launches: []
    }

    for(let i = 1; i <= 10;i++) {

        let launch_date_local = (new Date(
            random.int((min = 0), (max = Date.now()))
        ));

        api.launches.push({
            flight_number: i,
            mission_name: `Mission ${i}`,
            launch_year: String(launch_date_local.getFullYear()),
            launch_success: random.boolean(),
            launch_date_local: launch_date_local.toISOString(),
            rocket: { 
                rocket_id: i,
                rocket_name: `Rocket ${i}`,
                rocket_type: `Rocket Type ${i}`
            }
        });   

    }
    return api;
}