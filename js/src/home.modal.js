/*!
 * Copyright (c) 2020 Eclipse Foundation, Inc.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * Contributors:
 *   Martin Lowe <martin.lowe@eclipse-foundation.org>
 *
 * SPDX-License-Identifier: EPL-2.0
 */

import jQuery from 'jquery';

const jakartaoneModal = (function ($) {
  $('#eclipsefdn-modal').on('show.bs.modal', function (event) {
    var $init = $(event.relatedTarget);
    var $modal = $(this);
    $modal.find('h4.modal-title').text($init.attr('data-title'));
    $modal.find('#modal-presenter').text($init.attr('data-presenter'));
    $modal.find('#modal-time').text($init.attr('data-time'));
    $modal.find('.modal-body').html($init.find('.modal-content')[0].innerHTML);
  });
})(jQuery, document);

export default jakartaoneModal;
