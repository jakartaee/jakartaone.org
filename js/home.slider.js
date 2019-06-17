/** 
  Copyright (c) 2019 Eclipse Foundation, Inc.

  This program and the accompanying materials are made available under the
  terms of the Eclipse Public License v. 2.0 which is available at
  http://www.eclipse.org/legal/epl-2.0.

  Contributors:
    Martin Lowe <martin.lowe@eclipse-foundation.org>

  SPDX-License-Identifier: EPL-2.0
*/
$(document).ready(function () {
    // initialize the Owl carousel
    $("#slider").owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            601: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
        pagination: true,
        responsiveRefreshRate: 100
    });
});