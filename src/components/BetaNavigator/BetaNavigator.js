/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 */

import React from 'react';
import {colors, sharedStyles} from 'theme';
import Remarkable from 'remarkable';

// const markdown = `[New React Docs](https://beta.reactjs.org) has been released!
// _Note that it is in Beta and a work in progress._`;

const markdown = `New [React Docs (BETA)](https://beta.reactjs.org) has been released!`;

const BetaNavigator = () => {
  const remark = new Remarkable();
  const html = remark.render(markdown);

  return (
    <div
      css={{
        padding: '1em',
        border: `1px solid ${colors.divider}`,
        borderRadius: '1em',
      }}>
      <div
        css={[sharedStyles.markdown]}
        dangerouslySetInnerHTML={{__html: html}}
      />
    </div>
  );
};

export default BetaNavigator;
