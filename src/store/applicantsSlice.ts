import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mockApplicants } from '../data/mockApplicants';
import type { Applicant } from '../data/mockApplicants';

export interface FilterState {
  payType: 'hourly' | 'annual' | 'both';
  maxHourlyRate: number | null;
  maxAnnualSalary: number | null;
  sortPayBy: 'ascending' | 'descending' | null;
  language: string | null;
  country: string | null;
  aiRanking: boolean;
  englishProficiency: number;
  experienceMatch: number;
}

interface ApplicantsState {
  items: Applicant[];
  activeCategory: 'new' | 'invites' | 'shortlisted' | 'rejected';
  filters: FilterState;
}

const initialState: ApplicantsState = {
  items: mockApplicants,
  activeCategory: 'new',
  filters: {
    payType: 'hourly',
    maxHourlyRate: null,
    maxAnnualSalary: null,
    sortPayBy: null,
    language: null,
    country: null,
    aiRanking: false,
    englishProficiency: 50,
    experienceMatch: 50,
  },
};

const applicantsSlice = createSlice({
  name: 'applicants',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<'new' | 'invites' | 'shortlisted' | 'rejected'>) {
      state.activeCategory = action.payload;
    },
    updateFilter(state, action: PayloadAction<Partial<FilterState>>) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
    shortlistApplicant(state, action: PayloadAction<string>) {
      const applicant = state.items.find((a) => a.id === action.payload);
      if (applicant) {
        applicant.status = 'shortlisted';
      }
    },
    rejectApplicant(state, action: PayloadAction<string>) {
      const applicant = state.items.find((a) => a.id === action.payload);
      if (applicant) {
        applicant.status = 'rejected';
      }
    },
  },
});

export const {
  setActiveCategory,
  updateFilter,
  resetFilters,
  shortlistApplicant,
  rejectApplicant,
} = applicantsSlice.actions;

export default applicantsSlice.reducer;
