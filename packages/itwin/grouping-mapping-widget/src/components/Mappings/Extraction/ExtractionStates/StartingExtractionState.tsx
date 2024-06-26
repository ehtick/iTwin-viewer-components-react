/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from "react";
import { SvgStatusPendingHollow } from "@itwin/itwinui-icons-color-react";

export const StartingExtractionState = () => (
  <div title="Starting" className="gmw-extraction-status">
    <div className="gmw-status-icon">
      <SvgStatusPendingHollow />
    </div>
  </div>
);
