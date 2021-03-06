$(document).ready(function () {

    function setupWidgets() {
        $('#TimeSelector').dialog({
            bgiframe: true,
            autoOpen: true,
            height: 300,
            width: 350,
            modal: true
        });

        $('#BeforeSelector').dialog({
            bgiframe: true,
            autoOpen: false,
            height: 300,
            width: 350,
            modal: true
        });

        $('#StimSelector').dialog({
            bgiframe: true,
            autoOpen: false,
            height: 300,
            width: 350,
            modal: true
        });

        $('#MedSelector').dialog({
            bgiframe: true,
            autoOpen: false,
            height: 300,
            width: 350,
            modal: true
        });

        $('#NoteSelector').dialog({
            bgiframe: true,
            autoOpen: false,
            height: 300,
            width: 350,
            modal: true
        });

        $('#before-slider').slider({
            min: 5,
            max: 20,
            step: .1,
            value: $('#FeedingWeightBefore').val(),
            change: function (event, ui) {
                $('#FeedingWeightBefore').val(ui.value);
                $('#FeedingWeightBefore').trigger('change');
            }
        });

        $('#FeedingWeightBefore').change(function () {
            var value = $(this).val();
            $('#WeightDisplay').html(value);
            $('#Before').html(value);
        });

        $('#WeightDisplay').html($('#FeedingWeightBefore').val());

        $('#AfterSelector').dialog({
            bgiframe: true,
            autoOpen: false,
            height: 300,
            width: 350,
            modal: true
        });

        $('#FoodTypeSelector').dialog({
            bgiframe: true,
            autoOpen: false,
            height: 300,
            width: 350,
            modal: true
        });

        $('#after-slider').slider({
            min: 5,
            max: 20,
            step: .1,
            value: $('#FeedingWeightAfter').val(),
            change: function (event, ui) {
                $('#FeedingWeightAfter').val(ui.value);
                $('#FeedingWeightAfter').trigger('change');
            }
        });

        $('#FeedingWeightAfter').change(function () {
            var value = $(this).val();
            $('#AfterWeightDisplay').html(value);
            $('#After').html(value);
        });

        $('#AfterWeightDisplay').html($('#FeedingWeightAfter').val());

        $('#FeedingTime').change(function () {
            $('#AteAt').html($(this).val());
        });

        $('#JustNow').click(function () {
            recordWeightBefore();
        });

        $('#Earlier').click(function () {
            $('#TimeButtons').hide();
            $('#EarlierContainer').show('slow');
        });

        $('#TimeOK').click(function () {
            $('#FeedingTime').val($('#EarlierTime').val());
            recordWeightBefore();
        });

        $('#BeforeOK').click(function () {
            recordWeightAfter();
        });

        $('#AfterOK').click(function () {
            recordFoodType();
        });

        $('#NoNotes').click(function () {
            recordMeds();
        });

        $('#YesNotes').click(function () {
            $('#NoteButtons').hide();
            $('#NoteContainer').show('slow');
        });

        $('#SelectFoodType').click(function () {
            recordNotes();
        });

        $('#NoteOK').click(function () {
            var value = $('#NoteInput').val();
            $('#TheNotes').html(value);
            $('#FeedingNotes').val(value);

            recordMeds();
        });

        $('#YesMeds').click(function () {
            $('#MedDisplay').html('Yes');
            $('#FeedingMedsGiven').attr('checked', true);
            recordStimulation();
        });

        $('#NoMeds').click(function () {
            $('#MedDisplay').html('No');
            recordStimulation();
        });

        $('#NoStim').click(function () {
            $('#StimDisplay').html('No');
            $('#StimSelector').dialog('close');
        });

        $('#YesStim').click(function () {
            $('#StimButtons').hide();
            $('#FeedingStimulated').attr('checked', true);
            $('#StimContainer').show('slow');
        });

        $('#Stim1').click(function () {
            $('#StimDisplay').html('Urine');
            $('#FeedingStimulationResult').val('U');
            $('#StimSelector').dialog('close');
        });

        $('#Stim2').click(function () {
            $('#StimDisplay').html('Feces');
            $('#FeedingStimulationResult').val('F');
            $('#StimSelector').dialog('close');
        });

        $('#Stim3').click(function () {
            $('#StimDisplay').html('Abnormal');
            $('#FeedingStimulationResult').val('Abn');
            $('#StimSelector').dialog('close');
        });
    }

    function recordWeightBefore() {
        $('#FeedingTime').trigger('change');
        $('#TimeSelector').dialog('close');
        $('#BeforeSelector').dialog('open');
    }

    function recordWeightAfter() {
        $('#FeedingWeightBefore').trigger('change');
        $('#BeforeSelector').dialog('close');
        $('#AfterSelector').dialog('open');
    }

    function recordFoodType() {
        $('#FeedingWeightAfter').trigger('change');
        $('#AfterSelector').dialog('close');
        $('#FoodTypeSelector').dialog('open');
    }

    function recordNotes() {
        $('#FoodTypeSelector').dialog('close');
        $('#NoteSelector').dialog('open');
    }

    function recordMeds() {
        $('#NoteSelector').dialog('close');
        $('#MedSelector').dialog('open');
    }

    function recordStimulation() {
        $('#MedSelector').dialog('close');
        $('#StimSelector').dialog('open');
    }

    setupWidgets();
});