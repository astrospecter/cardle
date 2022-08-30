import { DateTime } from "luxon";
import { useCallback, useEffect, useMemo, useState } from "react";
import seedrandom from "seedrandom";

const noRepeatStartDate = DateTime.fromFormat("2022-05-01", "yyyy-MM-dd");

export function getDayString(shiftDayCount) { // TODO: look up js equivalent and documentation for datetime
    return DateTime.now()
        .plus({ days: shiftDayCount ?? 0})
        .toFormat("yyyy-MM-dd");
}

// export function useTodays(dayString) 