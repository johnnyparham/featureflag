# LaunchDarkly Project

- Used React
- React SDK

## LauchDarkly Set up

In LaunchDarkly I created a boolean feature flag called `coolFlag`

## Overview of the Code

The React SDK was initialized in `App.js` using the `withLDProvider` function.

A JS file `feature.Flag.js` was created which contains the feature flag code and `FeatureFlag` is declared.  Additionally, the logic for the feature flag `coolFlag` is provided.

## Results

When feature flag is off, users see:
**Feature Flag off...**

When feature flag is on, users see:
**Feature Flag ON!!! Yah!!!!!**
