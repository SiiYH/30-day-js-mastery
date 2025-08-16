/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let currTank = 0;
    let totalTank = 0;
    let start = 0;

    for (let i = 0; i<gas.length; i++){
        currTank += gas[i] - cost[i];
        totalTank += gas[i] - cost[i];

        // console.log(`${i} current: ${currTank}`)
        // console.log(`${i} total: ${totalTank}`)

        if (currTank < 0){
            start = i + 1;
            currTank = 0
        }
    }

    return totalTank >= 0 ? start : -1;
};