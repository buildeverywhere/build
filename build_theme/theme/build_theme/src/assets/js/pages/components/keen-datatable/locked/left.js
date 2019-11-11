'use strict';
// Class definition

var KTDefaultDatatableDemo = function() {
	// Private functions

	// basic demo
	var demo = function() {

		var datatable = $('.kt_datatable').KTDatatable({
			data: {
				type: 'remote',
				source: {
					read: {
						url: 'https://keenthemes.com/keen/tools/preview/inc/api/datatables/demos/default2.php',
					},
				},
				pageSize: 20,
				serverPaging: true,
				serverFiltering: true,
				serverSorting: true,
			},

			layout: {
				scroll: true,
				height: 550,
				footer: false,
			},

			sortable: true,

			filterable: false,

			pagination: true,

			search: {
				input: $('#generalSearch'),
			},

			columns: [
				{
					field: 'employee_id',
					title: 'Employee ID',
					locked: {left: 'lg'},
				}, {
					field: 'name',
					title: 'Name',
					locked: {left: 'lg'},
					template: function(row) {
						return row.first_name + ' ' + row.last_name;
					},
				}, {
					field: 'email',
					width: 150,
					title: 'Email',
				}, {
					field: 'phone',
					title: 'Phone',
				}, {
					field: 'hire_date',
					title: 'Hire Date',
					type: 'date',
					format: 'MM/DD/YYYY',
				}, {
					field: 'gender',
					title: 'Gender',
				}, {
					field: 'department',
					title: 'Department',
				}, {
					field: 'address',
					title: 'Address',
				}, {
					field: 'website',
					title: 'Website',
				}, {
					field: 'salary',
					title: 'Salary',
				}, {
					field: 'notes',
					title: 'Notes',
					width: 300,
				}, {
					field: 'status',
					title: 'Status',
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Pending', 'class': 'kt-badge--brand'},
							2: {'title': 'Delivered', 'class': ' kt-badge--metal'},
							3: {'title': 'Canceled', 'class': ' kt-badge--primary'},
							4: {'title': 'Success', 'class': ' kt-badge--success'},
							5: {'title': 'Info', 'class': ' kt-badge--info'},
							6: {'title': 'Danger', 'class': ' kt-badge--danger'},
							7: {'title': 'Warning', 'class': ' kt-badge--warning'},
						};
						return '<span class="kt-badge ' + status[row.status].class + ' kt-badge--inline kt-badge--pill">' + status[row.status].title + '</span>';
					},
				}, {
					field: 'type',
					title: 'Type',
					autoHide: false,
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Online', 'state': 'danger'},
							2: {'title': 'Retail', 'state': 'primary'},
							3: {'title': 'Direct', 'state': 'accent'},
						};
						return '<span class="kt-badge kt-badge--' + status[row.type].state + ' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' + status[row.type].state +
							'">' +
							status[row.type].title + '</span>';
					},
				}, {
					field: 'Actions',
					title: 'Actions',
					sortable: false,
					width: 110,
					overflow: 'visible',
					autoHide: false,
					template: function() {
						return '\
							<div class="dropdown">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
	                                <i class="la la-ellipsis-h"></i>\
	                            </a>\
							    <div class="dropdown-menu dropdown-menu-right">\
							        <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
							        <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
							        <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
							    </div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">\
								<i class="la la-edit"></i>\
							</a>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">\
								<i class="la la-trash"></i>\
							</a>\
					';
					},
				}],

		});

		$('#kt_form_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'status');
		});

		$('#kt_form_type').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'type');
		});

		$('#kt_form_status,#kt_form_type').selectpicker();

	};

	return {
		// public functions
		init: function() {
			demo();
		},
	};
}();

jQuery(document).ready(function() {
	KTDefaultDatatableDemo.init();
});