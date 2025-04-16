interface InputEstimator {
    wallLength: number;
    wallHeight: number;
    blockLength: number;
    blockHeight: number; 
    mortarJoint?: number; // optional
}


// ? Function With Mortar Included in block laying
export const BlockEstimator = async(inputs: InputEstimator) => {
    const mortarJoint = inputs.mortarJoint ?? 0.01; // Default to 

    const wallArea = inputs.wallLength * inputs.wallHeight;
    const blockSize = (inputs.blockHeight + mortarJoint) * (inputs.blockLength + mortarJoint); //!Includes Mortar on blocks
    const NumberOfBlocks = wallArea / blockSize;

    return Math.ceil(NumberOfBlocks);
}


// ? Function Without Mortar block laying
export const BlockEstimatorWithoutMortar = async(inputs: InputEstimator) => {
    const wallArea = inputs.wallLength * inputs.wallHeight;
    const blockSize = inputs.blockHeight * inputs.blockLength; //!Does Not Include Mortar on blocks
    
    const NumberOfBlocks = wallArea / blockSize;

    return Math.ceil(NumberOfBlocks);
}