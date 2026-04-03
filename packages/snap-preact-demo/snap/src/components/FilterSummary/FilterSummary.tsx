import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { withStore, withController, useA11y } from '@athoscommerce/snap-preact/components';

type FilterSummaryProps = {
	store: SearchStore;
	filters: Filter[];
	controller?: SearchController;
};

export const FilterSummary = withStore(
	withController(
		observer((props: FilterSummaryProps) => {
			const { filters } = props.store;
			const controller = props.controller;
			const removeAll = controller?.urlManager.remove('filter');

			return filters.length ? (
				<div className="ss-summary">
					<div className="ss-summary-container">
						<h4 className="ss-title">Current Filters</h4>

						<div className="ss-list ss-flex-wrap-center">
							{filters &&
								filters.map((filter: Filter) => (
									<div className="ss-list-option">
										<a {...filter.url.link} className="ss-list-link">
											<span className="ss-summary-label">{filter.facet.label}:</span> <span className="ss-summary-value">{filter.value.label}</span>
										</a>
									</div>
								))}

							<div className="ss-list-option ss-summary-reset">
								<a {...removeAll?.link} className="ss-list-link" ref={(e) => useA11y(e)}>
									Clear All
								</a>
								<a className="ss-list-link">Clear All</a>
							</div>
						</div>
					</div>
				</div>
			) : null;
		})
	)
);
