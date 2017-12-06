<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PokemonUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'nullable|min:2',
            'age' => 'nullable|integer',
            'pounds' => 'nullable|numeric',
            'description' => 'nullable|min:6',
            'image' => 'nullable|image',
            'pokemon_types_ids' => 'nullable|array',
            'pokemon_types_ids.*' => 'nullable|distinct|exists:pokemon_types,id',
            'location' => 'nullable|array',
            'location.*' => 'nullable|numeric'
        ];
    }
}
