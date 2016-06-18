import React, {Component} from 'react';

import {
    SectionHead,
    SectionNoData,
    StaticGrid,
    STATIC_TABLE_CELL_TYPES,
} from '@txcap.com/ui-components';

// 当日报价统计
export default class DailyBiddingSection extends Component {
    // no test
    getRenderedWithData() {
        const dailyBidding = this.props.dailyBidding;
        const gridMetadata = [
            {
                title: '报买均价',
                data: dailyBidding.bid_avg,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
            {
                title: '报卖均价',
                data: dailyBidding.offer_avg,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
            {
                title: '报买股数',
                data: dailyBidding.bid_volume,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
            {
                title: '报卖股数',
                data: dailyBidding.offer_volume,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
            {
                title: '报买笔数',
                data: dailyBidding.bid_num,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
            {
                title: '报卖笔数',
                data: dailyBidding.offer_num,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
            {
                title: '最高报买',
                data: dailyBidding.highest_bid,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
            {
                title: '最高报卖',
                data: dailyBidding.highest_offer,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
            {
                title: '最低报买',
                data: dailyBidding.lowest_bid,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
            {
                title: '最低报卖',
                data: dailyBidding.lowest_offer,
                cellType: STATIC_TABLE_CELL_TYPES.PLAIN_TEXT,
            },
        ];
        return (
            <div>
                <SectionHead title="当日报价统计" />
                <StaticGrid
                    columnCount={4}
                    metadata={gridMetadata}
                />
            </div>
        );
    }

    getRendered() {
        if (this.props.dailyBidding) {
            return this.getRenderedWithData();
        }
        return (
            <SectionNoData title="当日报价统计" />
        );
    }

    render() {
        return this.getRendered();
    }
}
