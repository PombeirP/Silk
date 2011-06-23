//===================================================================================
// Microsoft patterns & practices
// Silk : Web Client Guidance
//===================================================================================
// Copyright (c) Microsoft Corporation.  All rights reserved.
// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY
// OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT
// LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE.
//===================================================================================
// The example companies, organizations, products, domain names,
// e-mail addresses, logos, people, places, and events depicted
// herein are fictitious.  No association with any real company,
// organization, product, domain name, email address, logo, person,
// places, or events is intended or should be inferred.
//===================================================================================
/*jslint onevar: true, undef: true, newcap: true, regexp: true, plusplus: true, bitwise: true, devel: true, maxerr: 50 */

(function ($) {
    module('InfoPane Tests', {
        setup: function () {
            $('#qunit-fixture').append('<div id="info"><div/></div>');
        }
    });

    test('when moveOnScreenFromRight is called, then infoPane is shown', function () {
        expect(2);
        var info = $('#info').infoPane();
        info.infoPane('moveOnScreenFromRight');
        setTimeout(function () {
            ok($('#info').not(':hidden'), 'infoPane is visible');
            equal($('#info').css('left'), '260px', 'infoPane is positioned correctly');
            start();
        }, 1500);
        stop(1700);
    });

    test('when moveOnScreenFromRight is called, then isOnScreen is set to true', function () {
        expect(1);
        var info = $('#info').infoPane();
        info.infoPane('moveOnScreenFromRight');
        setTimeout(function () {
            equal(info.infoPane('option', 'isOnScreen'), true, 'isOnScreen is true');
            start();
        }, 1200);
        stop(1500);
    });

    test('when moveOffScreenToRight is called, then infoPane is hidden', function () {
        expect(2);
        var info = $('#info').infoPane();
        info.infoPane('moveOffScreenToRight');
        setTimeout(function () {
            ok($('#info').is(':hidden'), 'infoPane is hidden');
            equal($('#info').css('left'), '640px', 'infoPane is positioned correctly');
            start();
        }, 1200);
        stop(1500);
    });

    test('when moveOffScreenToRight is called, then isOnScreen is set to false', function () {
        expect(1);
        var info = $('#info').infoPane();
        info.infoPane('moveOffScreenToRight');
        setTimeout(function () {
            equal(info.infoPane('option', 'isOnScreen'), false, 'isOnScreen is false');
            start();
        }, 1200);
        stop(1500);
    });

    test('when created, then attached details widget', function () {
        expect(2);
        $('#info').infoPane();
        equal($('.mstats-vehicle-details').length, 1, 'vehicle details setup');
        ok(mstats.infoPane.vehicleDetails, 'details registered with mstats');
    });

    test('when created, then attached fillups widget', function () {
        expect(2);
        $('#info').infoPane();
        equal($('.mstats-fillups').length, 1, 'fillups widget is setup');
        ok(mstats.infoPane.fillups, 'fillups registered with mstats');
    });

    test('when created, then attached reminders widget', function () {
        expect(2);
        $('#info').infoPane();
        equal($('.mstats-reminders-pane').length, 1, 'reminders widget is setup');
        ok(mstats.infoPane.reminders, 'reminders registered with mstats');
    });

    test('when created, then defaults to details as the activePane', function () {
        expect(1);
        var info = $('#info').infoPane();
        equal(info.infoPane('option', 'activePane'), 'details', 'defaults to details');
    });
    
}(jQuery));