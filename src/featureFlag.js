import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const FeatureFlag = ({ flags }) => {
    return flags.coolFlag ? <div>Feature Flag ON!!! Yay!!!!!</div> : <div>Feature Flag off...</div>;
};

export default withLDConsumer() (FeatureFlag);